/**
 * Props for the parallax text component.
 */
export interface ParallaxProps {
  /**
   * Text content to animate.
   */
  children: string;
  /**
   * Optional scroll velocity multiplier for the parallax effect.
   */
  baseVelocity?: number;
}
