# Ghi chú: HTML và Playwright cơ bản

## Các loại thẻ

1. **Thẻ đóng mở**: có thẻ mở và thẻ đóng, ví dụ `<p>...</p>`
2. **Thẻ tự đóng**: không cần thẻ đóng, ví dụ `<img>`

## DOM

### Thẻ cấu trúc HTML

- `html`
- `body`

### Thẻ bố cục và ngữ nghĩa

- `div`: chia khối
- `header`

### Thẻ nội dung

- `heading` (`h1` đến `h6`)
- `<p>`: đoạn văn, xuống dòng
- `<ul>`: danh sách không thứ tự, chỉ có dấu chấm
- `<ol>`: danh sách có sắp xếp 1, 2, 3
- `<li>`: từng mục trong danh sách

### Thẻ tương tác

- `<a href="...">`: link
- `<img src="...">`: hình ảnh

### Thẻ form

- `<input>`: ô nhập nhỏ
- `<button>`: nút bấm
- `<select>`, `<option>`: danh sách chọn
- `<textarea>`: ô nhập văn bản rộng hơn (có thuộc tính `rows`, `cols`, ...)

## Playwright cơ bản

Một test Playwright có 2 phần:

1. Tiêu đề
2. Nội dung

Các thao tác chính:

- **navigate**: điều hướng đến trang web
- **locate**: tìm và xác định phần tử trên trang
