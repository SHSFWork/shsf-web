import { SITE } from "@shsfwork/constants/common";
import { ImageResponse } from "next/og";
import { join } from "path";
import fs from "fs";

function getLogo() {
  try {
    const logoPath = join(process.cwd(), "public/brand", "logo.png");
    const logoData = fs.readFileSync(logoPath);
    const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;
    return logoBase64;
  } catch (e) {
    console.error("Error loading logo:", e);
    return null;
  }
}

async function loadAssets() {
  try {
    const [normalFontModule, monoFontModule, semiboldFontModule] =
      await Promise.all([
        import("./geist-regular-otf.json"),
        import("./geistmono-regular-otf.json"),
        import("./geist-semibold-otf.json"),
      ]);

    const normalFont =
      normalFontModule.default?.base64Font || normalFontModule.base64Font || "";
    const monoFont =
      monoFontModule.default?.base64Font || monoFontModule.base64Font || "";
    const semiboldFont =
      semiboldFontModule.default?.base64Font ||
      semiboldFontModule.base64Font ||
      "";

    return [
      {
        name: "Geist",
        data: Buffer.from(normalFont as string, "base64"),
        weight: 400 as const,
        style: "normal" as const,
      },
      {
        name: "Geist Mono",
        data: Buffer.from(monoFont as string, "base64"),
        weight: 400 as const,
        style: "normal" as const,
      },
      {
        name: "Geist",
        data: Buffer.from(semiboldFont as string, "base64"),
        weight: 600 as const,
        style: "normal" as const,
      },
    ];
  } catch (error) {
    console.error("Font loading error:", error);
    return [];
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || SITE.subtitle;
    const description = searchParams.get("description") || SITE.description;

    const fonts = await loadAssets();
    const logoBase64 = getLogo();

    const colors = {
      bg: "#fcf9f8",
      text: "#25201c",
      secondaryText: "#7b695c",
      accent: "#4a3f37",
      border: "#f2e9e2",
      gradient:
        "linear-gradient(to right, rgba(134, 78, 38, 0.2), rgba(116, 63, 20, 0.4))",
    };

    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full relative overflow-hidden"
          style={{
            fontFamily: "Geist",
            background: colors.bg,
            color: colors.text,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10%",
              right: "-5%",
              width: "40%",
              height: "70%",
              borderRadius: "100%",
              background: colors.gradient,
              filter: "blur(40px)",
              opacity: 0.4,
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "-15%",
              left: "-10%",
              width: "50%",
              height: "60%",
              borderRadius: "100%",
              background: colors.gradient,
              filter: "blur(30px)",
              opacity: 0.3,
              zIndex: 1,
            }}
          />

          <div tw="flex flex-col items-center justify-center text-center w-full h-full p-12 ">
            {logoBase64 && (
              <img
                src={logoBase64}
                width={72}
                height={72}
                alt={SITE.title}
                tw="rounded-xl shadow-lg mb-8"
                style={{ objectFit: "cover" }}
              />
            )}
            <div tw="tracking-tight flex flex-col justify-center text-balance font-semibold text-7xl max-w-4xl">
              {title}
            </div>

            <div
              tw="text-3xl mt-6 text-balance font-normal max-w-3xl"
              style={{ color: colors.secondaryText }}
            >
              {description}
            </div>

            <div
              tw="font-medium text-2xl mt-8"
              style={{
                maxWidth: "900px",
                color: colors.accent,
              }}
            >
              {SITE.domain}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 628,
        fonts,
      }
    );
  } catch (error) {
    console.error("OG image generation error:", error);
    return new Response(`OG image generation failed: ${error}`, {
      status: 500,
    });
  }
}
