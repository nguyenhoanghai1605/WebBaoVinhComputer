var productsPerPage = 8; // Số sản phẩm trên mỗi trang
var currentPage = 1; // Trang hiện tại
var productContainer = document.getElementById("product-container"); // Tham chiếu đến phần tử hiển thị sản phẩm

var products = [
    {
        name: "PC WORKSTATION DUAL AMD EPYC 7742: 256 THREADS | DUAL VGA",
        price: "1.050.000.000 đ",
        oldPrice: "1.855.000.000 đ",
        discount: "43%",
        imageSrc: "./image/hinh1.png",
        links: "./html/ChiTietSanPham.html"
    },
    {
        name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
        price: "38.180.000 đ",
        oldPrice: "51.855.000.000 đ",
        discount: "33%",
        imageSrc: "./image/hinh2.png",
        links: "./html/ChiTietSanPham.html"
    },
    {
        name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
        price: "38.840.000 đ",
        oldPrice: "58.840.000 đ",
        discount: "35%",
        imageSrc: "./image/hinh3.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P8",
        price: "58.840.000 đ",
        oldPrice: "71.855.000.000 đ",
        discount: "15%",
        imageSrc: "./image/hinh4.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC WORKSTATION X99-T8D/E3-2673/128G DDR3/PSU650/1SP P8",
        price: "1.250.000.000 đ",
        oldPrice: "1.955.000.000 đ",
        discount: "40%",
        imageSrc: "./image/hinh4.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC WORKSTATION X99/E3-2680/32G DDR3/PSU550/JT9605B",
        price: "50.900.000 đ",
        oldPrice: "65.900.000 đ",
        discount: "17%",
        imageSrc: "./image/hinh3.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC WORKSTATION X99/E3-2680/64G DDR3/PSU550/JT9605B",
        price: "58.900.000 đ",
        oldPrice: "75.900.000 đ",
        discount: "20%",
        imageSrc: "./image/hinh3.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC WORKSTATION X79/E3-2670/32G DDR3/PSU550/JT9331",
        price: "60.900.000 đ",
        oldPrice: "75.350.000 đ",
        discount: "20%",
        imageSrc: "./image/hinh3.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC WORKSTATION X79/E3-2670/64G DDR3/PSU550/JT9331",
        price: "65.950.000.000 đ",
        oldPrice: "81.855.000.000 đ",
        discount: "20%",
        imageSrc: "./image/hinh3.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC WORKSTATION X79/E3-2670/128G DDR3/PSU550/JT9331",
        price: "69.950.000.000 đ",
        oldPrice: "91.855.000.000 đ",
        discount: "20%",
        imageSrc: "./image/hinh3.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC Workstation T90 – Core i9 13900K | 64G | RTX3090 24GB | 2TB SSD",
        price: "66.900.000 đ",
        oldPrice: "81.855.000.000 đ",
        discount: "20%",
        imageSrc: "./image/hinh5.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC Workstation T90 – Core i9 13900K | 128G | RTX3090 24GB | 2TB SSD",
        price: "69.900.000 đ",
        oldPrice: "85.855.000.000 đ",
        discount: "20%",
        imageSrc: "./image/hinh5.png",
        links: "./html/ChiTietSanPham.html"
    },  
    {
        name: "PC Gaming STAR CHICKEN AQUA | RTX 3060TI, Intel | RTX3090 32GB | 2TB SSD ",
        price: "88.050.000.000 đ",
        oldPrice: "1.155.000.000 đ",
        discount: "35%",
        imageSrc: "./image/hinh6.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 32GB/ SSD 1TB/ 700W)",
        price: "75.900.000 đ",
        oldPrice: "90.890.000 đ",
        discount: "15%",
        imageSrc: "./image/hinh7.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 64GB/ SSD 1TB/ 700W)",
        price: "85.050.000.000 đ",
        oldPrice: "92.450.000 đ",
        discount: "11%",
        imageSrc: "./image/hinh8.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC Workstation Machine Learning VIP (5955WX/ WRX80E/ 128G/ 2TB/ 10TB HDD/ 4X RTX 4090/ 2000W)",
        price: "1.050.000.000 đ",
        oldPrice: "1.855.000.000 đ",
        discount: "43%",
        imageSrc: "./image/hinh9.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC - MACHINE LEARNING 03 (5995WX/ WRX80E/ 256GB RAM/ 20TB SSD/ 3X RTX 4090 O24G/ 2000W)",
        price: "564.540.000 đ",
        oldPrice: "679.540.000 đ",
        discount: "20%",
        imageSrc: "./image/hinh10.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC HOTGEAR AMD Ryzen 9 / Ryzen 9 7900X / MAIN B650/ DDR4 16GB / SSD 250GB M.2 NVME",
        price: "1.150.000.000 đ",
        oldPrice: "1.955.000.000 đ",
        discount: "40%",
        imageSrc: "./image/hinh11.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 128GB / SSD 2TB M.2 NVME",
        price: "2.250.000.000 đ",
        oldPrice: "2.555.000.000 đ",
        discount: "15%",
        imageSrc: "./image/hinh12.png",
        links: "./html/ChiTietSanPham.html"
    }, 
    {
        name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 256GB / SSD 2TB M.2 NVME",
        price: "2.450.000.000 đ",
        oldPrice: "2.755.000.000 đ",
        discount: "15%",
        imageSrc: "./image/hinh14.png",
        links: "./html/ChiTietSanPham.html"
    },
    // Thêm các sản phẩm khác vào đây
];

// Hàm để hiển thị sản phẩm trên trang cụ thể
function displayProducts(page) {
    var startIndex = (page - 1) * productsPerPage;
    var endIndex = startIndex + productsPerPage;

    // Xóa các sản phẩm hiện tại khỏi danh sách
    productContainer.innerHTML = '';

    // Hiển thị sản phẩm từ startIndex đến endIndex
    for (var i = startIndex; i < endIndex && i < products.length; i++) {
        var product = products[i];

        // Tạo các phần tử sản phẩm và thêm chúng vào danh sách
        var productDiv = document.createElement("div");
        productDiv.className = "col-md-3";

        var productImage = document.createElement("img");
        productImage.className = "hinh";
        productImage.src = product.imageSrc;

        var productName = document.createElement("div");
        productName.className = "ten-san-pham fix-2-line";
        productName.textContent = product.name;

        var productPrice = document.createElement("div");
        productPrice.className = "gia-chung";

        var priceDiv = document.createElement("div");
        priceDiv.className = "gia col-md-10 p-0";
        priceDiv.innerHTML = '<div class="gia-san-pham">' + product.price + '</div>' +
                             '<div class="gia-san-pham-cu">' + product.oldPrice + '</div>';

        var discountDiv = document.createElement("div");
        discountDiv.className = "giam-gia col-md-2 p-0";
        discountDiv.textContent = product.discount;

        var linksDiv = document.createElement("a");
        linksDiv.className = "xem-them-link";
        linksDiv.textContent = 'Xem thêm';
        linksDiv.href = product.links; // Đặt liên kết đến trang chi tiết sản phẩm

        productPrice.appendChild(priceDiv);
        productPrice.appendChild(discountDiv);

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(linksDiv);

        productContainer.appendChild(productDiv);
    }
}

// Hàm để tạo các nút phân trang
function createPaginationButtons() {
    var totalPages = Math.ceil(products.length / productsPerPage);
    var paginationContainer = document.getElementById("pagination");

    // Xóa nút phân trang hiện có (nếu có)
    paginationContainer.innerHTML = '';

    // Nút đầu trang
    var firstPageButton = document.createElement("button");
    firstPageButton.textContent = "Đầu";
    firstPageButton.addEventListener("click", function () {
        goToPage(1);
    });
    paginationContainer.appendChild(firstPageButton);

    // Nút các trang
    for (var i = 1; i <= totalPages; i++) {
        var pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.addEventListener("click", function (event) {
            var pageNum = parseInt(event.target.textContent);
            goToPage(pageNum);
        });
        paginationContainer.appendChild(pageButton);
    }

    // Nút cuối trang
    var lastPageButton = document.createElement("button");
    lastPageButton.textContent = "Cuối";
    lastPageButton.addEventListener("click", function () {
        goToPage(totalPages);
    });
    paginationContainer.appendChild(lastPageButton);
}

// Hàm để điều hướng đến một trang cụ thể
function goToPage(pageNum) {
    currentPage = pageNum;
    displayProducts(currentPage);
}

// Hiển thị trang đầu tiên và tạo phân trang
displayProducts(currentPage);
createPaginationButtons();
