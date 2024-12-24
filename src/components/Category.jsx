import '../scss/category.scss';

const Category = ({category}) => {

  return (
    <div className='category'>
      <h3>{category.content}</h3>
    </div>
  );
}

export default Category;