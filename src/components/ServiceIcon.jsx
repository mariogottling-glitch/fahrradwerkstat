import {
  Bicycle,
  Lightning,
  Wrench,
  Van,
  PersonSimpleBike,
  Package,
} from "@phosphor-icons/react";

const icons = {
  bike: Bicycle,
  battery: Lightning,
  wrench: Wrench,
  van: Van,
  child: PersonSimpleBike,
  cargo: Package,
};

export function ServiceIcon({ name, size = 30, weight = "regular" }) {
  const Icon = icons[name] || Bicycle;
  return <Icon aria-hidden="true" size={size} weight={weight} />;
}
