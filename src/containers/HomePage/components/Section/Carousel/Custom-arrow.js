export const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", color: 'black !important', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', right: '-12px', width: '30px', height: '30px', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}
            onClick={onClick}
        />
    );
}

export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", color: 'black !important', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', left: '-10px', zIndex: '2', width: '30px', height: '30px', justifyContent: 'center', alignItems: 'center', borderRadius: '4px' }}
            onClick={onClick}
        />
    );
}