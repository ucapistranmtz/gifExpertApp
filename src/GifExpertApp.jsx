import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/*input */}
      <AddCategory onNewCategory={value => onAddCategory(value)} />
      {/* gif list */}

      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      {/*gif item */}
    </>
  );
};
