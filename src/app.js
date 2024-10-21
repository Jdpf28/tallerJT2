import { series } from './Data.js';
document.addEventListener('DOMContentLoaded', function () {
    renderSeriesTable(series);
});
function renderSeriesTable(series) {
    var seriesTbody = document.getElementById('series');
    // Check if seriesTbody is found
    if (!seriesTbody) {
        console.error("No se encontró el elemento con ID 'series'");
        return;
    }
    // Check the incoming series data
    console.log("Series Data:", series);
    var seriesHtml = '';
    series.forEach(function (s) {
        seriesHtml += "\n            <tr>\n                <td>".concat(s.id, "</td>\n                <td><a href=\"").concat(s.link, "\" target=\"_blank\">").concat(s.name, "</a></td>\n                <td>").concat(s.channel, "</td>\n                <td>").concat(s.seasons, "</td>\n            </tr>\n        ");
    });
    // Log the generated HTML for debugging
    console.log("Generated HTML:", seriesHtml);
    seriesTbody.innerHTML = seriesHtml;
    var averageSeasons = calculateAverageSeasons(series);
    var averageSeasonsText = document.getElementById('averageSeasons');
    if (averageSeasonsText) {
        averageSeasonsText.innerHTML = "Promedio de temporadas: ".concat(averageSeasons.toFixed(2));
    }
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
