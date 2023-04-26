import { useEffect, useState } from "react";

export function ConversionForm({ setSavedConversions }) {
    const kmMl = 0.6214;
    const mlKm = 1 / kmMl;
    const mFt = 3.2808;
    const ftM = 1 / mFt;
    const cmIn = 0.3937008;
    const inCm = 1 / cmIn;

    const [conversion, setConversion] = useState(kmMl);
    const [inputValue, setInputValue] = useState("");
    const [inputUnit, setInputUnit] = useState("km");
    const [outputUnit, setOutputUnit] = useState("miles");

    const result = parseFloat(inputValue * conversion).toFixed(2);

    useEffect(() => handleUnits(), [conversion]); //todo: guess what dependency is missing and fix it
    function handleUnits() {
        switch (parseFloat(conversion)) {
            case kmMl:
                setInputUnit("km");
                setOutputUnit("miles");
                break;

            case mlKm:
                setInputUnit("miles");
                setOutputUnit("km");
                break;

            case mFt:
                setInputUnit("meters");
                setOutputUnit("feet");
                break;

            case ftM:
                setInputUnit("feet");
                setOutputUnit("meters");
                break;

            case cmIn:
                setInputUnit("cm");
                setOutputUnit("inches");
                break;

            case inCm:
                setInputUnit("inches");
                setOutputUnit("cm");
                break;

            default:
                console.log("default");
                break;
        }
    }
    function handleReverse(e) {
        e.preventDefault();
        setConversion(1 / conversion);
        if (
            inputValue &&
            setInputValue(parseFloat(inputValue * conversion).toFixed(2))
        );
    }
    function addFav(e) {
        e.preventDefault();
        if (!inputValue) return;
        if (isNaN(inputValue)) return alert("Alert: Input has to be a number");
        setSavedConversions((savedConversions) => {
            return [
                ...savedConversions,
                {
                    id: crypto.randomUUID(),
                    inputValue,
                    inputUnit,
                    result,
                    outputUnit,
                },
            ];
        });
        setInputValue("");
    }
    return (
        <form className="conversion-form">
            <label className="convert-label">Convert</label>
            <div className="new-conversion-form">
                <select
                    className="conversion"
                    value={conversion}
                    onChange={(e) => setConversion(e.target.value)}>
                    <option value={kmMl}>km → miles</option>
                    <option value={mlKm}>miles → km</option>
                    <option value={mFt}>meters → feet</option>
                    <option value={ftM}>feet → meters</option>
                    <option value={cmIn}>cm → inches</option>
                    <option value={inCm}>inches → cm</option>
                </select>
                <button
                    className="reverse-icon"
                    type="button"
                    onClick={(e) => handleReverse(e)}>
                    <span className="material-symbols-outlined">sync_alt</span>
                </button>
                <input
                    className="input"
                    placeholder="0000"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <span className="input-unit">{inputUnit}</span>
            </div>
            <button className="fav-btn" onClick={(e) => addFav(e)}>
                <span className="material-symbols-outlined">favorite</span>
            </button>
            <span className="result">
                {result}
                {" " + outputUnit}
            </span>
        </form>
    );
}
