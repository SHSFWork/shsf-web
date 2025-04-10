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
      bg: "#f3f4f6", // Açık gri arka plan
      text: "#312e81", // Ana metin rengi
      secondaryText: "#6b7280", // İkincil metin rengi
      accent: "#581c87", // Vurgu rengi
      border: "#d1d5db", // Sınır rengi
      gradient:
        "linear-gradient(to right, rgba(81, 46, 129, 0.2), rgba(88, 28, 135, 0.4))", // Gradient
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

          <div
            style={{
              position: "absolute",
              inset: "24px",
              border: `1px solid ${colors.border}`,
              borderRadius: "12px",
              zIndex: 2,
            }}
          />

          <div tw="flex flex-col absolute justify-center items-center inset-0 p-20 w-full h-full z-10">
            {title || description ? (
              <div tw="flex flex-col items-center justify-center text-center w-full h-full">
                {logoBase64 && (
                  <div tw="mb-8 flex items-center absolute left-0 top-0">
                    <img
                      src={logoBase64}
                      width={60}
                      height={60}
                      alt={SITE.title}
                      tw="rounded-xl shadow-lg"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      tw="ml-4 text-3xl font-semibold tracking-tight"
                      style={{
                        maxWidth: "900px",
                        backgroundImage: `linear-gradient(90deg, #312e81 0%, #581c87 100%)`,
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {SITE.title}
                    </div>
                  </div>
                )}
                <div tw="tracking-tight flex flex-col justify-center text-balance font-semibold text-[80px] max-w-4xl">
                  {title}
                </div>
                {description && (
                  <div
                    tw="text-[32px] mt-6 text-balance font-normal max-w-3xl"
                    style={{ color: colors.secondaryText }}
                  >
                    {description}
                  </div>
                )}
              </div>
            ) : (
              <div tw="flex flex-col items-center justify-center text-center w-full h-full">
                <div tw="flex items-center mb-6">
                  {logoBase64 && (
                    <img
                      src={logoBase64}
                      width={70}
                      height={70}
                      alt={SITE.title}
                      tw="rounded-xl shadow-lg"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <div
                    tw="ml-4 text-3xl font-semibold tracking-tight"
                    style={{ color: colors.accent }}
                  >
                    {SITE.title}
                  </div>
                </div>
                <div tw="flex text-[72px] font-semibold tracking-tight text-balance max-w-4xl">
                  Motion-First UI Library
                </div>
                <div
                  tw="text-2xl mt-6 flex max-w-2xl text-balance"
                  style={{ color: colors.secondaryText }}
                >
                  <p>
                    Built with React, TypeScript, Tailwind CSS, Motion, and
                    shadcn/ui.
                  </p>
                </div>
                <div tw="mt-8 flex items-center">
                  <div
                    tw="px-4 py-2 rounded-full text-xl"
                    style={{
                      background: colors.accent + "22",
                      color: colors.accent,
                    }}
                  >
                    {SITE.domain}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div tw="absolute bottom-8 right-8 flex items-center px-4 py-2 rounded-full text-xl">
            <p
              tw="font-medium"
              style={{
                maxWidth: "900px",
                backgroundImage: `linear-gradient(90deg, #312e81 0%, #581c87 100%)`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {SITE.domain}
            </p>
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
