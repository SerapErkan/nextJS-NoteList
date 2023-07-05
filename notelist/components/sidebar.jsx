const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="menu-title">
          <ul>
            <li className="item">
              <i class="bx bx-search-alt-2"></i>
              <span>Search</span>
            </li>
            <li className="item">
              <i class="bx bx-bulb"></i>
              <span>Notlar</span>
            </li>
            <li className="item">
              <i class="bx bxs-customize"></i>
              <span>Liste Görünümü</span>
            </li>
            <li className="item">
              <i class="bx bxs-magic-wand"></i>
              <span>Etiketleri Düzenleyin</span>
            </li>
            <li className="item">
              <i class="bx bxs-folder-open"></i>
              <span>Arşiv</span>
            </li>
            <li className="item">
              <i class="bx bxs-trash"></i>
              <span>Çöp Kutusu</span>
            </li>
            <li className="item">
              <i class="bx bx-dialpad-alt"></i>
              <span>Theme</span>
            </li>
          </ul>

          <ul>
            <div>
              <i class="fa-solid fa-minus"></i>
            </div>

            <li className="item">
              <i class="bx bx-tag-alt"></i>
              <span>Name</span>
            </li>
            <li className="item">
              <i class="bx bx-tag-alt"></i>
              <span>Name</span>
            </li>
            <li className="item">
              <i class="bx bx-tag-alt"></i>
              <span>Name</span>
            </li>
            <li className="item">
              <i class="bx bx-tag-alt"></i>
              <span>Name</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
