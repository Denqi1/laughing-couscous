import { useEffect, useState } from 'react';
import { CategoryModel, getCategories } from '../../entities/category';
import { ChooseCategoryButton } from '../../features/category';
import { Box } from '@mui/material';

export function CategoryList() {
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    (async () => {
      const dataList = await getCategories();
      setCategories(dataList);
    })();
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      {categories.map((category) => (
        <ChooseCategoryButton key={category.id} buttonName={category.name} />
      ))}
    </Box>
  );
}
