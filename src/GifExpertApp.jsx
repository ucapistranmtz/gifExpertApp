import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
  const ondAddCategory = () => {
    console.log('Vinland Saga');
    setCategories(['Vinland Saga', ...categories]);
  };
  return (
    <>
      {/*titulo */}
      <h1>GifExpertApp</h1>

      {/*input */}
      <AddCategory />
      {/* gif list */}
      <button onClick={ondAddCategory}>Add new Category</button>
      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      {/*gif item */}
    </>
  );
};
