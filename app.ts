import { series } from './Data.js';
import { Serie } from './Serie.js';

document.addEventListener('DOMContentLoaded', () => {
    renderSeriesTable(series);
});

function renderSeriesTable(series: any[]) {
    const seriesTbody = document.getElementById('series');

    // Check if seriesTbody is found
    if (!seriesTbody) {
        console.error("No se encontró el elemento con ID 'series'");
        return;
    }

    // Check the incoming series data
    console.log("Series Data:", series);

    let seriesHtml = '';
    series.forEach(function (s) {
        seriesHtml += `
            <tr>
                <td>${s.id}</td>
                <td><a href="${s.link}" target="_blank">${s.name}</a></td>
                <td>${s.channel}</td>
                <td>${s.seasons}</td>
            </tr>
        `;
    });

    // Log the generated HTML for debugging
    console.log("Generated HTML:", seriesHtml);

    seriesTbody.innerHTML = seriesHtml;

    const averageSeasons = calculateAverageSeasons(series);
    const averageSeasonsText = document.getElementById('averageSeasons');

    if (averageSeasonsText) {
        averageSeasonsText.innerHTML = `Promedio de temporadas: ${averageSeasons.toFixed(2)}`;
    }
}
function calculateAverageSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}


