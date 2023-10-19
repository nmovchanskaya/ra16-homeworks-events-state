export const ToolbarFC = ({filters, selected, onSelectFilter}) => {
  
  let filterBtns = filters.map((item) => {
    const onSelectFilterBinded = onSelectFilter.bind(null, item);
    if (item === selected) {
        return <button onClick={onSelectFilterBinded} key={item} className="button_active">{item}</button>
    }
    return <button onClick={onSelectFilterBinded} key={item}>{item}</button>
  });
  //set active button with selected

  return (
    <div className="buttons">
        {filterBtns}
    </div>
  )
}
