type ResponsiveFontSizesInput = {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
};

type ResponsiveFontSizesOutput = {
    "@media (max-width:479px)": { fontSize: string };
    "@media (min-width:480px) and (max-width:767px)": { fontSize: string };
    "@media (min-width:768px) and (max-width:991px)": { fontSize: string };
    "@media (min-width:992px) and (max-width:1279px)": { fontSize: string };
    "@media (min-width:1280px)": { fontSize: string };
};

type TypographyVariant = {
    fontWeight: number;
    fontSize: string;
    lineHeight: number | string;
} & ResponsiveFontSizesOutput;

type Typography = {
    fontFamily: string;
    fontWeightRegular: number;
    fontWeightMedium: number;
    fontWeightBold: number;
    h1: TypographyVariant;
    h2: TypographyVariant;
    h3: TypographyVariant;
    h4: TypographyVariant;
    h5: TypographyVariant;
    h6: TypographyVariant;
    subtitle1: Omit<TypographyVariant, keyof ResponsiveFontSizesOutput>;
    subtitle2: Omit<TypographyVariant, keyof ResponsiveFontSizesOutput>;
};

export function remToPx(value: string): number {
    return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number): string {
    return `${value / 16}rem`;
}

export function responsiveFontSizes({
    sm,
    md,
    lg,
    xl,
    xxl,
}: ResponsiveFontSizesInput): ResponsiveFontSizesOutput {
    return {
        "@media (max-width:479px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:480px) and (max-width:767px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:768px) and (max-width:991px)": {
            fontSize: pxToRem(lg),
        },
        "@media (min-width:992px) and (max-width:1279px)": {
            fontSize: pxToRem(xl),
        },
        "@media (min-width:1280px)": {
            fontSize: pxToRem(xxl),
        },
    };
}

const typography: Typography = {
    fontFamily: ["Poppins", "Montserrat"].join(","),
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontWeight: 700,
        fontSize: pxToRem(70),
        lineHeight: pxToRem(97.52),
        ...responsiveFontSizes({ sm: 40, md: 50, lg: 60, xl: 70, xxl: 80 }),
    },
    h2: {
        fontWeight: 600,
        fontSize: pxToRem(55),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 35, md: 40, lg: 45, xl: 55, xxl: 60 }),
    },
    h3: {
        fontWeight: 600,
        fontSize: pxToRem(45),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 30, md: 35, lg: 40, xl: 45, xxl: 50 }),
    },
    h4: {
        fontWeight: 400,
        fontSize: pxToRem(32),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 22, md: 25, lg: 30, xl: 32, xxl: 36 }),
    },
    h5: {
        fontWeight: 500,
        fontSize: pxToRem(22),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 22, md: 25, lg: 30, xl: 32, xxl: 36 }),
    },
    h6: {
        fontWeight: 400,
        fontSize: pxToRem(20),
        lineHeight: 1.1,
        ...responsiveFontSizes({ sm: 12, md: 15, lg: 18, xl: 20, xxl: 24 }),
    },
    subtitle1: {
        fontWeight: 400,
        fontSize: pxToRem(20),
        lineHeight: 1.1,
    },
    subtitle2: {
        fontWeight: 400,
        fontSize: pxToRem(18),
        lineHeight: 22 / 14,
    },
};

export default typography;
