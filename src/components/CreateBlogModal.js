const CreateBlogModal = () => (
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header bg-danger text-white">
          <h4 className="modal-title" id="staticBackdropLabel">Feature Unavailable</h4>
          <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
      </div>
    </div>
  </div>
)

export default CreateBlogModal;