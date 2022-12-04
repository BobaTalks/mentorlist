const getMentorRow = (mentor) => {
  return `
<div id="${mentor.name.split(" ").join("")}" class="mentor">
    <span>${mentor.name}</span>
    <div class="mentor-info">
        <div class="links">
            <a alt="external link to linkedin" target="_blank" rel="noopener noreferrer" href="${
              mentor.linkedin
            }">
                <img class="logo" src="assets/linkedin_logo.png" alt="LinkedIn logo" />
            </a>
           ${getCalendlyLink(mentor)}
        </div>
        ${
          mentor.status
            ? `<div class="status"><strong>${mentor.status}</strong></div>`
            : ""
        }
    </div>
</div>
    `;
};

const getCalendlyLink = (mentor) => {
  return `
<a class="calendly" alt="external link to calendly" disabled="${
    !!mentor.status && "disabled"
  }" target="_blank" rel="noopener noreferrer" 
${
  !mentor.status
    ? `
    href="${!mentor.status ? mentor.calendly : ""}"
    `
    : ""
}>
<img class="logo" src="assets/calendly_logo.png" alt="Calendly logo" />
</a>
    `;
};

const getSerializedId = (id) => {
  return id
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .join("");
};

$(document).ready(() => {
  fetch("../mentorlist.json", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //   const categories = data.mentors.map((mentor) => mentor.category);
      $("h2#modified").text(`As of ${data.lastModified}`);

      const categoryMentors = data.mentors.reduce((accum, currentMentor) => {
        if (!accum[currentMentor.category]?.length) {
          accum[currentMentor.category] = [currentMentor];
        } else {
          accum[currentMentor.category].push(currentMentor);
        }

        return accum;
      }, {});

      Object.entries(categoryMentors).forEach(([category, mentors]) => {
        const categoryId = getSerializedId(category);

        mentors.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        });

        $("ul#categories").append(
          `<li class="category" id="${categoryId}" key="${categoryId}">
            <div class="category-title"><strong>${category}</strong></div>
          </li>`
        );

        mentors.forEach((mentor) => {
          $(`li#${categoryId}`).append(getMentorRow(mentor));
        });
      });
    });
});
