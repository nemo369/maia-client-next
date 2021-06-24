const CategoryLi = (cat) => <li>{cat}</li>;

function CategoryList({ categories }) {
  return (
    <ul className="grid grid-rows-3 gap-x-3 gap-y-4">
      {categories?.map((cat) => (
        <CategoryLi key={cat.id} cat={cat} />
      ))}
    </ul>
  );
}

export default CategoryList;
