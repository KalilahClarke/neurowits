import "./Image.css";
const Image = () => {
  return (
    <div className='imageContainer'>
      <div className="image-row">
        <img
          className="card image"
          src="https://media.istockphoto.com/id/1581045672/photo/education-laptop-student-computer-teenager-studying-boy-learning-homework-study-young-school.jpg?s=612x612&w=0&k=20&c=ytSpytOADNigrtZTFZkZwYmjBeEculuHc_2MLEvpKNk="
        />
        <img
          className="card image"
          src="https://media.gettyimages.com/id/1570178815/photo/father-helping-son-with-homework.jpg?s=612x612&w=gi&k=20&c=cCbtBj1WrmU-synAD5xPNo6VyUXUV0a7KoLFprwdt_A="
        />
        <img
          className="card image"
          src="https://www.rocklandparent.com/columnpic2/tween-girl-online-tutoring.jpg"
        />
      </div>
    </div>
  );
};

export default Image;
