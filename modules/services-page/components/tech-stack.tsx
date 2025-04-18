import Gravity, { MatterBody } from "@shsfwork/components/custom/gravity";
import { Card } from "@shsfwork/components/custom/3d-card";

import { TECH_BADGES } from "../constants";

export default function TechStack() {
  return (
    <div>
      <Card variant="lifted" className="max-w-2xl  mx-auto">
        <div className="relative h-96 overflow-hidden">
          <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
            {TECH_BADGES.map((badge, index) => (
              <MatterBody
                key={index}
                matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                x={`${Math.random() * 100}%`}
                y={`${Math.random() * 100}%`}
              >
                <div
                  className={`text-sm sm:text-base md:text-lg bg-gradient-to-r ${badge.gradient} ${badge.textColor} rounded-xl hover:cursor-grab px-6 py-3`}
                >
                  {badge.name}
                </div>
              </MatterBody>
            ))}
          </Gravity>
        </div>
      </Card>
    </div>
  );
}
