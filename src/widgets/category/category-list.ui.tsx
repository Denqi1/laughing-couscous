import { useEffect, useState } from 'react';
import { CategoryModel, getCategories } from '../../entities/category';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Link to={category.name} key={category.id}>
          <Button>{category.name}</Button>
        </Link>
      ))}
    </Box>
  );
}
