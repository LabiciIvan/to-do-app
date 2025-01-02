export default function ColorSection({onSetSectionColor, colorSelected, width = '30px', height = '30px' }) {

  const sectionColors = [
    "#FF4500", // Red-Orange
    "#FFA500", // Orange
    "#FFD700", // Gold
    "#32CD32", // Lime Green
    "#1E90FF", // Dodger Blue
    "#4B0082", // Indigo
    "#EE82EE"  // Violet
  ];

  return (
    <>
      {sectionColors.map(color => 
        <button
          key={color}
          onClick={() => onSetSectionColor(color)}
          style={{
            backgroundColor: color, 
            border: colorSelected === color ? '3px solid black' : '2px solid transparent',
            borderRadius: '50%',
            width: width,
            height: height,
            cursor: 'pointer'
          }}
        />
      )}
    </>
  )

}