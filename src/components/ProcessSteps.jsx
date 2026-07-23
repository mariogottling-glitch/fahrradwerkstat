import {
  Bicycle,
  CalendarBlank,
  CheckCircle,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { processSteps } from "../data/site.js";

const icons = [CalendarBlank, Bicycle, MagnifyingGlass, CheckCircle];

export function ProcessSteps() {
  return (
    <ol className="process-steps">
      {processSteps.map((step, index) => {
        const Icon = icons[index];
        return (
          <li key={step.title}>
            <div className="process-step__number">0{index + 1}</div>
            <div className="process-step__icon"><Icon size={28} aria-hidden="true" /></div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
