const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileBtn = document.querySelector(".profile__edit-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const editProfileNameInput = editProfileForm.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileForm.querySelector(
  "#profile-description-input"
);

// Open Edit Profile modal
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

// Close Edit Profile modal
editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

// Handle Edit Profile form submission
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// ===== New Post Modal =====
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostAddBtn = document.querySelector(".profile__add-btn");

const newPostImageInput = newPostForm.querySelector("#profile-image-input");
const newPostCaptionInput = newPostForm.querySelector("#profile-caption-input");

// Open New Post modal
newPostAddBtn.addEventListener("click", function () {
  newPostImageInput.value = "";
  newPostCaptionInput.value = "";
  newPostModal.classList.add("modal_is-opened");
});

// Close New Post modal
newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

// Handle New Post form submission
function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log("New post image:", newPostImageInput.value);
  console.log("New post caption:", newPostCaptionInput.value);
  newPostModal.classList.remove("modal_is-opened");
  // TODO: Add logic here to actually create a new post card on the page
}

newPostForm.addEventListener("submit", handleNewPostSubmit);
