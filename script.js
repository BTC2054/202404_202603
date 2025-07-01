// 获取Canvas元素
const ctx = document.getElementById('investmentChart').getContext('2d');

// 生成未来24个月的标签（从2025年6月到2027年5月）
const months = Array.from({ length: 24 }, (_, i) => {
    const date = new Date(2024, 3 + i);
    return date.toLocaleString('zh-CN', { year: 'numeric', month: 'short' });
});

// 模拟数据：理论收益和实际收益
// 这里是示例数据，你可以替换为实际数据
const theoreticalReturns = [155.98,312.97,470.96, 629.95, 789.96, 951.00, 1113.06, 1276.15, 1440.29, 1605.47, 1771.71, 1939.01, 2172.79,2408.07,2644.84,2883.13,3122.94,3364.28,3607.16,
3851.59,4097.58,4345.14,4594.28,4845.01,]; // 你的理论收益数据
const actualReturns = [166.67,  327.02,  591.42,  744.1,  578.56,  598.46,  578.45,  938.34,  1562,  1577.48,  1604.66,  1763.96,  1908.99,  2454.22,  2649.6,]; // 你的实际收益数据


// 创建折线图
new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: '理论收益',
                data: theoreticalReturns,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.4
            },
            {
                label: '实际收益 (换算等值 USD)',
                data: actualReturns,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: ''
                }
            },
            x: {
                title: {
                    display: true,
                    text: '时间周期'
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});
