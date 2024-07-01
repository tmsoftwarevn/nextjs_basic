export default function Card({children}: {children: React.ReactNode}) {
    const CardStyle = {
        padding : "100px",
        margin: "10px",
        border: "1px solid #333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
    return (
        <>
        <div style={CardStyle}>
            {children}
        </div>
        </>
    );
}