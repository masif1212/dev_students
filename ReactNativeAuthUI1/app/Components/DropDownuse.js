import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import onClickOutside from 'react-onclickoutside';

const Dropdown = ({ title, items,  multiSelect = false }) => {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    Dropdown.handleClickOutside = () => setOpen(false);

    const handleOnClick = (item) => {
        if (!selection.some(current => current.id === item.id)) {
            if (!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
        }
    }

    const isItemInSelection = (item) => {
        if (selection.some(current => current.id === item.id)) {
            return true;
        }
        return false;
    }

 

    return (
        <View style={{
            felx: 1,
            minHeight: 38
        }}>
            <TouchableOpacity
                tabIndex={0}
                onPress={() => toggle(!open)}
                style={{
                    flex: 1, flexDirection: 'row',
                    justifyContent: 'space-between', width: "95%",
                    padding: 10, elevation: 0,
                    borderBottomWidth: 1,
                    borderColor: "gray",
        
                }}>

                <Text style={{ fontSize: 17 }}>{title}</Text>
                <Text style={{ fontSize: 17 }}>{open ? 'Close' : 'Open'}</Text>

            </TouchableOpacity>
            {open && (
                <View style={{
                    padding: 0,
                    margin: 0,
                    width: "100%",
                    marginTop: 20,
                }}>
                    {items.map(item => (
                        <View>
                            <TouchableOpacity type="button" onPress={() => handleOnClick(item)} style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between', width: '90%',
                                padding: 10, borderBottomWidth: 1, borderColor: 'grey', elevation: 0, marginTop: 4
                            }}>
                                <Text>{item.value}</Text>
                                <Text>{isItemInSelection(item) && 'Selected'}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);