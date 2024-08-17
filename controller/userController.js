const JokeModel=require('../models/userModel')


exports.postData = (req, res) => {
    const joke = new JokeModel(req.body)
    joke.save().then((doc) => {
        
        return res.json(doc)
    }).catch((err) => {
        
        
        return res.json({ err: err.message })
    })
}
exports.getData = async (req, res) => {
  try {
    const page = req.body.page || 1; // Default to page 1 if no page is provided
    const items_per_page = 3;

    // Get the total number of documents
    const totalItems = await JokeModel.countDocuments();

    // Calculate total pages
    const totalPages = Math.ceil(totalItems / items_per_page);

    // Fetch the jokes for the current page
    const jokes = await JokeModel.find()
      .skip((page - 1) * items_per_page)
      .limit(items_per_page);

    // Return jokes along with total pages
    return res.json({
      jokes,
      totalPages,
      currentPage: page
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
