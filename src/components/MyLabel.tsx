import './MyLabel.css';

interface MyLabelProps {
  /**
   * El contenido de texto del componente.
   */
  label: string;
  /**
   * El tamaño del componente.
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Convierte todo el texto en maýusculas.
   */
  allCaps?: boolean;
  /**
   * Color de la fuente.
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Color de la fuente personalizado (por ejemplo, en hexadecimal).
   */
  fontColor?: string;
}

export function MyLabel({
  allCaps = false,
  color = 'primary',
  fontColor,
  label = 'No label',
  size = 'normal',
}: MyLabelProps) {
  const text = allCaps ? label.toUpperCase() : label;
  const textColor = fontColor ? '' : `text-${color}`;
  return (
    <span style={{ color: fontColor }} className={`label ${size} ${textColor}`}>
      {text}
    </span>
  );
}
