const createDestinationPhotoTemplate = (photo) => {
  return (
    `<img class="event__photo" src="${photo}" alt="Event photo">`
  );
};

export const createEventDestinationsTemplate = (event) => {
  const {destination} = event;
  const {description, photo} = destination;
  const photosTemplate = photo
    .map((it) => createDestinationPhotoTemplate(it))
    .join(`\n`);
  return (
    `${photo.length === 0 && description === `` ? ``
      : `<section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">
            Destination
          </h3>

          <p class="event__destination-description">${description}</p>
      ${photo.length > 0 ?
      `<div class="event__photos-container">
        <div class="event__photos-tape">
          ${photosTemplate}
        </div>
      </div>`
      : ``}
    </section>`}`
  );
};
