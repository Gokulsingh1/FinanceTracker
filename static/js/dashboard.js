document.addEventListener("DOMContentLoaded", function () {

    // ✅ Reusable function to create charts
    function createChart(canvasId, type, labels, data, options = {}, colors = null) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                    label: options.label || "",
                    data: data,
                    backgroundColor: colors ? colors.background : options.bg || "rgba(0,0,0,0.1)",
                    borderColor: colors ? colors.border : options.border || "rgba(0,0,0,0.3)",
                    borderWidth: 2,
                    fill: options.fill || false,
                    tension: 0.4,        // ✅ Smooth curves
                    hoverOffset: 8,      // ✅ Hover animation for donut
                    pointRadius: 4,
                    pointHoverRadius: 6,
                }],
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: "#fff",
                            font: { size: 14 }
                        }
                    }
                },

                scales: options.scales || {
                    y: {
                        beginAtZero: true,
                        ticks: { color: "#fff" },
                        grid: { color: "rgba(255,255,255,0.2)" }
                    },
                    x: {
                        ticks: { color: "#fff" },
                        grid: { display: false }
                    }
                },

                animation: {
                    duration: 1200,
                    easing: "easeOutQuart"
                }
            }
        });
    }

    // ✅ Chart 1 — BAR Chart
    createChart(
        "chart1",
        "bar",
        ["January", "February", "March", "April", "May"],
        [65, 59, 80, 81, 56],
        {
            label: "Monthly Growth",
            bg: "rgba(75, 192, 192, 0.6)",
            border: "rgba(75, 192, 192, 1)"
        }
    );

    // ✅ Chart 2 — LINE Chart
    createChart(
        "chart2",
        "line",
        ["June", "July", "August", "September", "October"],
        [45, 70, 42, 60, 75],
        {
            label: "Performance",
            fill: true,
            bg: "rgba(255, 99, 132, 0.3)",
            border: "rgba(255, 99, 132, 1)"
        }
    );

    // ✅ Chart 3 — DONUT Chart
    createChart(
        "chart3",
        "doughnut",
        ["Red", "Blue", "Yellow"],
        [30, 45, 25],
        {},
        {
            background: ["#FF6384", "#36A2EB", "#FFCE56"],
            border: ["#FF2B64", "#0A8BE5", "#DDB400"]
        }
    );

});
