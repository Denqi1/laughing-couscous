import { CategoryModel } from '@/entities/Category';

/**
 * Props for the category list component.
 */
export interface CategoryListProps {
  /**
   * List of categories to display.
   */
  categories: CategoryModel[];
}
