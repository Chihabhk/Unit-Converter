export function SavedConversions({ setSavedConversions, savedConversions }) {
    function hundleDelete(id) {
        setSavedConversions((savedConversions) => {
            return savedConversions.filter(
                (conversion) => conversion.id !== id
            );
        });
    }

    return (
        <div className="saved">
                saved <br />
            <div className="saved-conversions">
                {savedConversions.map((savedConversion) => {
                    return (
                        <span className="saved-conversion" key={savedConversion.id}>
                            {savedConversion.inputValue}
                            {" " + savedConversion.inputUnit}
                            {" → " + savedConversion.result}
                            {" " + savedConversion.outputUnit}
                            <button
                                className="delete-btn"
                                onClick={() =>
                                    hundleDelete(savedConversion.id)
                                }>
                                x
                            </button>
                            <br />
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
