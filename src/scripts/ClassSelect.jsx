import React from 'react'
import './scripts.css'
import { useEffect, useState } from 'react'

const ClassSelect = ({trig, setTrig, set, curr}) => {
    const [multiSelect, setMultiSelect] = useState(false)

    const [mainSelect, setMain] = useState(curr)
    const [secondSelect, setSecond] = useState("Bard")

    return (trig) ? (
        <div className='class_popup'>
            <div className='class_inside'>
                <div>
                    <button onClick={() => setMultiSelect(false)}>Single-Class</button>
                    <button onClick={() => setMultiSelect(true)}>Multi-Class</button>
                </div>
                <p>Primary Class</p>
                <select id='thisclass' onChange={() => setMain(thisclass.value)}>
                    <option value="Barbarian" disabled={(secondSelect == "Barbarian") && multiSelect==true}>Barbarian</option>
                    <option value="Bard" disabled={(secondSelect == "Bard") && multiSelect==true} >Bard</option>
                    <option value="Cleric" disabled={(secondSelect == "Cleric") && multiSelect==true}>Cleric</option>
                    <option value="Druid" disabled={(secondSelect == "Druid") && multiSelect==true}>Druid</option>
                    <option value="Fighter" disabled={(secondSelect == "Fighter") && multiSelect==true}>Fighter</option>
                    <option value="Monk" disabled={(secondSelect == "Monk") && multiSelect==true}>Monk</option>
                    <option value="Paladin" disabled={(secondSelect == "Paladin") && multiSelect==true}>Paladin</option>
                    <option value="Ranger" disabled={(secondSelect == "Ranger") && multiSelect==true}>Ranger</option>
                    <option value="Rogue" disabled={(secondSelect == "Rogue") && multiSelect==true}>Rogue</option>
                    <option value="Sorcerer" disabled={(secondSelect == "Sorcerer") && multiSelect==true}>Sorcerer</option>
                    <option value="Warlock" disabled={(secondSelect == "Warlock") && multiSelect==true}>Warlock</option>
                    <option value="Wizard" disabled={(secondSelect == "Wizard") && multiSelect==true}>Wizard</option>
                </select>
                <div id='multiclass' style={{ display: multiSelect ? 'block' : 'none' }}>
                    <p>Secondary Class</p>
                    <select id='secondclass' onChange={() => setSecond(secondclass.value)}>
                        <option value="Barbarian" disabled={(mainSelect == "Barbarian")}>Barbarian</option>
                        <option value="Bard" disabled={(mainSelect == "Bard")}>Bard</option>
                        <option value="Cleric" disabled={(mainSelect == "Cleric")}>Cleric</option>
                        <option value="Druid" disabled={(mainSelect == "Druid")}>Druid</option>
                        <option value="Fighter" disabled={(mainSelect == "Fighter")}>Fighter</option>
                        <option value="Monk" disabled={(mainSelect == "Monk")}>Monk</option>
                        <option value="Paladin" disabled={(mainSelect == "Paladin")}>Paladin</option>
                        <option value="Ranger" disabled={(mainSelect == "Ranger")}>Ranger</option>
                        <option value="Rogue" disabled={(mainSelect == "Rogue")}>Rogue</option>
                        <option value="Sorcerer" disabled={(mainSelect == "Sorcerer")}>Sorcerer</option>
                        <option value="Warlock" disabled={(mainSelect == "Warlock")}>Warlock</option>
                        <option value="Wizard" disabled={(mainSelect == "Wizard")}>Wizard</option>
                    </select>
                </div>
                <div>
                <button onClick={() => setTrig(false)}>Cancel</button>
                <button onClick={() => {
                    set(mainSelect)
                    setTrig(false)
                }}>Confirm</button>
                </div>
            </div>
        </div>
        ) : ""
}

export default ClassSelect