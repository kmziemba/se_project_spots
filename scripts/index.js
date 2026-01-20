// Profile Elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

// Edit Profile Modal
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileForm.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileForm.querySelector(
  "#profile-description-input"
);

// New Post Modal
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostForm.querySelector("#profile-image-input");
const newPostCaptionInput = newPostForm.querySelector("#profile-caption-input");

// Buttons
const editProfileBtn = document.querySelector(".profile__edit-btn");
const newPostAddBtn = document.querySelector(".profile__add-btn");
const closeButtons = document.querySelectorAll(".modal__close-btn");

// Functions

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

/* -------------------------------------------------------------------------- */
/* Event Handlers                               */
/* -------------------------------------------------------------------------- */

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  // Here is where you would normally grab input.value and create a new card
  console.log("Image URL:", newPostImageInput.value);
  console.log("Caption:", newPostCaptionInput.value);

  newPostForm.reset(); // Clear the form for next time
  closeModal(newPostModal);
}

/* -------------------------------------------------------------------------- */
/* Event Listeners                              */
/* -------------------------------------------------------------------------- */

// Edit Profile Listeners
editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// New Post Listeners
newPostAddBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

newPostForm.addEventListener("submit", handleNewPostSubmit);

// Global Close Button Logic
// This finds all close buttons and attaches a listener that finds its parent modal
closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});
