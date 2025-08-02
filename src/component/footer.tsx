import type {FooterProps} from "../libs/types";
function Footer(F:FooterProps){
    return(<footer className="text-secondary text-center p-2 bg-light mt-auto">
        Copyright © {F.year} {F.fullName} {F.studentId}
      </footer>);
}

export default Footer