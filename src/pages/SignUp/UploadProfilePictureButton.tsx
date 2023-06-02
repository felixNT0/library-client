function UploadProfilePictureButton({ setprofile_picture, uploadImage }: any) {
  return (
    <div
      className="text-center flex items-center justify-center mb-5"
      onClick={() => setprofile_picture("")}
    >
      <label className="w-[100%] flex flex-col items-center py-2 rounded-[15px] shadow-lg tracking-wide border border-[#5f9ea0] cursor-pointer text-[#5f9ea0]">
        <svg
          fill="#5f9ea0"
          height="18"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          Upload Your Profile Picture
        </span>
        <input
          type="file"
          className="hidden"
          onChange={uploadImage}
          accept=".jpg, .jpeg, .png"
        />
      </label>
    </div>
  );
}

export default UploadProfilePictureButton;
