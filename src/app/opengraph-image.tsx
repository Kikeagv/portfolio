
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Enrique Garcia - Designer & Builder";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    backgroundImage:
                        "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
                    backgroundSize: "100px 100px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        padding: "40px 80px",
                        borderRadius: "20px",
                        border: "1px solid #e5e5e5",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                            color: "#171717",
                            marginBottom: 20,
                            display: "flex", // distinct text block
                        }}
                    >
                        Enrique Garcia
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 500,
                            color: "#525252",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            display: "flex", // distinct text block
                        }}
                    >
                        Designer. Builder.
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
