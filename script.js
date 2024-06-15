document.addEventListener("DOMContentLoaded", function() {
    var vizUrl1 = "https://public.tableau.com/views/YOUR_VIZ_URL_1";
    var vizUrl2 = "https://public.tableau.com/views/YOUR_VIZ_URL_2";
    // Add more URLs as needed for additional Tableau charts

    var vizOptions = {
        width: "100%",
        height: "600px",
        hideTabs: true,
        hideToolbar: true
    };

    var vizContainer1 = document.getElementById("tableauViz1");
    var vizContainer2 = document.getElementById("tableauViz2");
    // Add more containers as needed for additional Tableau charts

    var viz1 = new tableau.Viz(vizContainer1, vizUrl1, vizOptions);
    var viz2 = new tableau.Viz(vizContainer2, vizUrl2, vizOptions);
    // Initialize more viz objects as needed for additional Tableau charts
});
