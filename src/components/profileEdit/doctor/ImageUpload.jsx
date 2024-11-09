"use client";

export default function ImageUpload({ image, setImage }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("helo");

    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
    </form>
  );
}
