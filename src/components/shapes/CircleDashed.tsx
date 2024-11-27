interface CircleDashedProps {
    svgHeight: number | string;
    svgWidth: number | string;
}

const CircleDashed = ({ svgHeight, svgWidth }: CircleDashedProps) => {
    const circles = [
        { radius: 230, dashArray: "5, 10", strokeWidth: 1, color: "#bcbcbc" },
        { radius: 150, dashArray: "5, 10", strokeWidth: 1, color: "#bcbcbc" },
        { radius: 75, dashArray: "5, 10", strokeWidth: 1, color: "#bcbcbc" },
    ];

    return (
        <svg
            width={svgWidth}
            height={svgHeight}
            viewBox="0 0 500 500"
            style={{
                display: "block",
            }}
        >
            {circles.map((circle, index) => (
                <circle
                    key={index}
                    cx="250"
                    cy="250"
                    r={circle.radius}
                    fill="none"
                    stroke={circle.color}
                    strokeWidth={circle.radius / 50} // Adjust stroke width dynamically
                    strokeDasharray={circle.dashArray}
                />
            ))}
        </svg>
    );
};

export default CircleDashed;
