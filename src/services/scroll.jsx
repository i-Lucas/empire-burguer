export default function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};