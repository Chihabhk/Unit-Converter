export function SavedConversions({ setSavedConversions, savedConversions }) {
    
    function handleDelete(id) {
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
                                    handleDelete(savedConversion.id)
                                }>
                                ✗
                            </button>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
