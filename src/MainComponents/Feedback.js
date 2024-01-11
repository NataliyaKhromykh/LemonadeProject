import React from "react";
import Review from "./Review";


function Feedback() {
    return (
        <main className="feedbackMain">
            <section>
                <div className="reviewBox">
                    <h2 className="feedbackText">Our customers love talking about us...</h2>
                    <h2 className="feedbackText">And we LOVE what they say:</h2>
                </div>
                <Review/>
            </section>
        </main>
    )
}
export default Feedback;