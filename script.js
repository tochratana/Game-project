function showContent(tabId, element) {
  // Hide all tab content
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.add("hidden"));

  // Show the selected tab content
  document.getElementById(tabId).classList.remove("hidden");

  // Remove 'active' class from all tabs
  const tabs = document.querySelectorAll("a");
  tabs.forEach((tab) => {
    tab.classList.remove("text-blue-600", "border-blue-500");
    tab.classList.add("text-gray-500", "border-transparent");
  });

  // Add 'active' class to the clicked tab
  element.classList.remove("text-gray-500", "border-transparent");
  element.classList.add("text-blue-600", "border-blue-500");
}
