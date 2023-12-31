interface LikeIconProps {
    size: number;
    isLiked?: boolean;
    linearGradient?: [string, string];
}

function LikeIcon({
    size,
    isLiked = false,
    linearGradient = ["#D44F4F", "#B43333"],
}: LikeIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 20 19"
        >
            <path
                fill={`url(#paint0_linear_259_326${isLiked}${linearGradient})`}
                fillRule="evenodd"
                stroke={`url(#paint1_linear_259_326${isLiked}${linearGradient})`}
                d="M4.882 13.172C3.07 11.26 1.622 9.986 1.154 7.969.806 6.47.909 3.73 2.95 2.453c4.5-2.815 7.022 1.504 7.022 1.504h.056s2.521-4.32 7.022-1.504c2.04 1.276 2.144 4.017 1.796 5.516-.467 2.017-1.916 3.291-3.728 5.203C10 18 10.003 18.005 10 18l-5.118-4.828z"
                clipRule="evenodd"
            />
            <defs>
                {isLiked && (
                    <linearGradient
                        id={`paint0_linear_259_326${isLiked}${linearGradient}`}
                        x1="8.284"
                        x2="23.876"
                        y1="-6.853"
                        y2="2.913"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor={linearGradient[0]} />
                        <stop offset="1" stopColor={linearGradient[1]} />
                    </linearGradient>
                )}
                <linearGradient
                    id={`paint1_linear_259_326${isLiked}${linearGradient}`}
                    x1="8.284"
                    x2="23.876"
                    y1="-6.853"
                    y2="2.913"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={linearGradient[0]} />
                    <stop offset="1" stopColor={linearGradient[1]} />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default LikeIcon;
