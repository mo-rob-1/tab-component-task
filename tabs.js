// Wait for the entire DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "tab"
  const tabs = document.querySelectorAll(".tab");
  // Select all elements with the class "tab-content"
  const contents = document.querySelectorAll(".tab-content");

  // Loop through each tab button
  tabs.forEach((tab, index) => {
    // Add a click event listener to each tab
    tab.addEventListener("click", function () {
      // Remove "active" class from all tabs and set aria-selected to false
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      // Hide all tab contents by removing "active" class
      contents.forEach((c) => c.classList.remove("active"));

      // Add "active" class to the clicked tab and set aria-selected to true
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      // Display the corresponding tab content based on the index
      contents[index].classList.add("active");
    });
  });
});
