import { useEffect, useState } from "react";
import { PageHeader } from "./Components/PageHeader";
import { PageFooter } from "./Components/PageFooter";
import { ConversionForm } from "./Components/ConversionForm";
import { SavedConversions } from "./Components/SavedConversions";

function App() {
    const [savedConversions, setSavedConversions] = useState(() => {
        const localConversions = localStorage.getItem("conversions");
        if (localConversions == null) return [];
        return JSON.parse(localConversions);
    });

    useEffect(
        () =>
            localStorage.setItem(
                "conversions",
                JSON.stringify(savedConversions)
            ),
        [savedConversions]
    );

    return (
        <>
            <PageHeader />
            <div className="container">
                <ConversionForm setSavedConversions={setSavedConversions} />
                <SavedConversions
                    setSavedConversions={setSavedConversions}
                    savedConversions={savedConversions}
                />
            </div>
            <PageFooter />
        </>
    );
}

export default App;
