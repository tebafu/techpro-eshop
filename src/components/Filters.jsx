import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

const Filters = ({
    sortOptions,
    categories,
    sortingOrder,
    setSortingOrder,
    selectedCategories,
    setSelectedCategories,
}) => {
    const handleToggle = (category) => {
        const currentIndex = selectedCategories.indexOf(category);
        const newChecked = [...selectedCategories];

        if (currentIndex === -1) {
            newChecked.push(category);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedCategories(newChecked);
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <List>
                <ListItem disablePadding>
                    <FormControl fullWidth>
                        <InputLabel id="sort-label">Sort By</InputLabel>
                        <Select
                            labelId="sort-label"
                            id="sort"
                            value={sortingOrder}
                            label="Sort By"
                            onChange={(event) => {
                                setSortingOrder(event.target.value);
                            }}
                        >
                            {sortOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </ListItem>
            </List>
            <Divider />
            <List>
                {categories.map((category) => (
                    <ListItem key={category} disablePadding>
                        <Checkbox
                            edge="start"
                            checked={selectedCategories.includes(category)}
                            tabIndex={-1}
                            disableRipple
                            onChange={() => handleToggle(category)}
                        />
                        <ListItemText primary={category} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Filters;
