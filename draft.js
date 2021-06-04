/*
import { useParams } from "react-router";
const { x } = useParams();
*/

/* отлов изменений url
window.onhashchange = function () {
  const url = window.location.href.split("http://localhost:8080");
  dispatch(changeSection(url[1]))
}
 */
//пыталась синхронизировать значение в адресной строке и pathname
// window.location.href=(pathname + "?page=" + state.pagination.currentPage)