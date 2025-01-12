# **Prototype Submission for Stylo 2.0**

## **1. System Architecture Documentation**

### **1.1 Architecture Overview**

#### **High-Level System Architecture Diagram**   
**Key Components:**
- **Data Ingestion:** Handles CSV files and images, preparing them for pipelines.  
- **Preprocessing:** Cleans text (removes stopwords, extracts key phrases) and normalizes images (resizing, cropping).  
- **Feature Extraction Pipelines:**  
  - **Text Pipeline:** Extracts features using Named Entity Recognition (NER) and NLP models like BERT.  
  - **Image Pipeline:** Extracts attributes like patterns, colors, and materials using YOLOv5 and ResNet50.  
- **Ontology Mapping:** Maps extracted features to the ontology schema.  
- **Storage and Reporting:** Stores processed results and generates reports.  

#### **Component Interaction Flowchart**  
1. **CSV Data:**  
   → Preprocessing → Text pipeline → Feature extraction → Ontology mapping → Output.  
2. **Image Data:**  
   → Preprocessing → Image pipeline → Feature extraction → Ontology mapping → Output.  

#### **Data Processing Pipeline Visualization**  
1. **Text Processing:**
   - Tokenization → Semantic extraction → Mapping to ontology.  
2. **Image Processing:**
   - Image inference → Attribute detection → Mapping to ontology.  

#### **System Scalability Considerations**
- **Batch Processing:** Ensures scalability for 100k+ records.  
- **Modular Pipelines:** Add new data formats without re-engineering.  
- **Cloud Ready:** Deployable on AWS/GCP for distributed processing.  

---

### **1.2 Technical Implementation Details**

#### **Model Architecture Specifications**
- **Text Pipeline:** BERT for embeddings + spaCy for NER.  
- **Image Pipeline:** YOLOv5 for object detection + ResNet50 for classification.  

#### **Feature Extraction Methodology**
- **Textual Features:**  
   Extracted `Brand`, `Material`, `Occasion` using NER and similarity clustering.  
- **Visual Features:**  
   Identified `Color`, `Pattern`, `Category` using trained models.  

#### **Ontology Structure and Hierarchy**
- **Classes:** `Category`, `Brand`, `Material`, `Feature`.  
- **Properties:** `hasFeature`, `belongsToCategory`.  
- **Hierarchy:**  
   - Root: `Fashion`.  
   - Subcategories: `Men's`, `Women's`.  
   - Leaf Nodes: `Formal Shirts`, `Party Wear`.  

#### **Integration Approach for Multi-Modal Data**
- Unified schema using `product_id` as a key.  
- Conflict resolution through text and image comparison.  

#### **Performance Optimization Strategies**
- Asynchronous pipelines using Python’s `asyncio`.  
- GPU acceleration for faster image inference.  

---

## **2. Ontology Framework**

### **2.1 Ontology Documentation**

#### **Complete Ontology Schema**
- Classes: `Product`, `Feature`, `Material`, `Category`.  
- Properties:  
  - `hasMaterial`: Links products to materials.  
  - `partOfCategory`: Defines hierarchy.  
- Constraints:  
  - Only one `Brand` per `Product`.  

#### **Class Hierarchies and Relationships**
- Example:  
  - `Clothing > Dresses > Evening Wear`.  
  - `Feature > Material > Cotton`.  

#### **Property Definitions and Constraints**
- Example:  
  - `hasColor`: Maps colors (`Red`, `Blue`) to products.  

#### **Extensibility Mechanisms**
- JSON schema for dynamic updates.  
- API to add/remove features.  

---

### **2.2 Feature Taxonomy**

#### **Comprehensive Feature Categorization**
- Visual: `Color`, `Pattern`.  
- Textual: `Brand`, `Material`, `Occasion`.  

#### **Cross-Category Relationship Mapping**
- Example:  
   `Summer Wear` overlaps with `T-Shirts` and `Shorts`.  

#### **Context-Aware Feature Definitions**
- Features vary by category:  
   - `Pattern` for shirts, but not for sneakers.  

#### **Attribute Inheritance Patterns**
- Example:  
   `Casual Wear` inherits attributes from `Lightweight Materials`.  

---

## **3. Implementation & Results**

### **3.1 Code Repository**  
[GitHub Repository Link](https://github.com/fromjyce/Stylo-2-0)  
- **Structure:**  
  - `text_pipeline.py`: Handles textual feature extraction.  
  - `image_pipeline.py`: Handles visual attribute extraction.  
  - `ontology_builder.py`: Builds and manages ontology schema.  



---

### **3.2 Performance Analysis**

#### **Feature Extraction Accuracy Metrics**
- **Text Pipeline:**  
   - Precision: 92%.  
   - Recall: 88%.  
- **Image Pipeline:**  
   - Precision: 85%.  
   - Recall: 80%.  

#### **Processing Speed Benchmarks**
- Text: 1,000 items/sec.  
- Image: 500 images/sec on RTX 3080.  

#### **Edge Case Documentation**
- Addressed cases like missing metadata and low-resolution images.  

---

### **3.3 Sample Outputs**
**Example JSON Output:**  
```json
{
  "product_id": "12345",
  "features": {
    "Brand": "H&M",
    "Material": "Cotton",
    "Color": "Red",
    "Category": "Dresses"
  }
}
```
---

## **4. Website for Stylo 2.0**  

### **4.1 Website Overview**  
The **Stylo 2.0** website serves as the front-facing interface for users to interact with the system. It provides an intuitive platform for uploading datasets, visualizing extracted features, and managing the ontology dynamically.  

[Demo Link](https://kzmof9rojby4wd60ks4l.lite.vusercontent.net/)  

---

### **4.2 Website Features**  

#### **1. User-Friendly Dashboard**  
- **Overview Panel:** Displays system status, recent uploads, and overall statistics (e.g., processed records, extraction accuracy).  
- **Real-Time Updates:** See progress on dataset processing and ontology updates.  

#### **2. Dataset Upload Functionality**  
- Supports bulk uploads of CSV files for textual data and zip files for images.  
- Validates uploaded files for format consistency and schema adherence.  

#### **3. Visualization Tools**  
- **Ontology Explorer:** Visualize the hierarchy of the ontology framework interactively.  
- **Feature Mapping View:** Displays extracted features mapped to the ontology.  
- **Insights Panel:** Provides analytics like most common categories, popular brands, and trends.  

#### **4. Multi-Modal Data Integration**  
- Allows users to cross-check the alignment of text and image features.  
- Highlights conflicts and provides suggestions for resolution.  

#### **5. Search and Filter Functionality**  
- Search by product ID, category, or features.  
- Advanced filtering to drill down into specific attributes (e.g., “Cotton dresses in red color”).  

#### **6. Dynamic Ontology Management**  
- Add, edit, or delete nodes and relationships in the ontology through an admin panel.  
- Supports live updates to the system without downtime.  

#### **7. API Integration and Documentation**  
- Provides API endpoints for developers to fetch processed results, submit datasets programmatically, and manage the ontology.  
- Includes comprehensive API documentation with code examples.  

---

### **4.3 Technical Implementation Details**  

#### **1. Frontend Technology**  
- Developed using **React.js** for dynamic, responsive UI.  
- **Tailwind CSS** for a modern and clean design aesthetic.  

#### **2. Backend Integration**  
- **FastAPI** serves as the backend for managing datasets, processing pipelines, and feature retrieval.  
- Real-time updates through **WebSocket** connections for interactive visualization.  

#### **3. Database and Storage**  
- **PostgreSQL:** For storing processed features and ontology mappings.  
- **AWS S3:** For scalable storage of uploaded images and datasets.  

#### **4. Security Measures**  
- File uploads secured with validation checks to prevent malicious inputs.  
- User authentication and role-based access control using **JWT Tokens**.  

---

### **4.4 Website Demo and Outputs**  

#### **Sample Workflow:**  
1. **Step 1:** User uploads a CSV file and a zip folder of images.  
2. **Step 2:** The system processes the files, extracts features, and maps them to the ontology.  
3. **Step 3:** The user views results in the dashboard, with detailed feature mappings and visualizations.  
4. **Step 4:** The user exports the results in JSON or CSV format for further use.  

#### **Sample Screenshot Descriptions:**  
- **Upload Page:** Clean interface for uploading datasets with progress tracking.  
- **Dashboard Overview:** Displays stats, recent activity, and processing insights.  
- **Ontology Visualization:** Interactive diagram of the current ontology framework.  
- **Search Results:** Tabular display of products with extracted features.  

---

### **4.5 Future Enhancements**  
- **Personalized User Accounts:** To save projects, datasets, and preferences.  
- **Integration with E-Commerce Platforms:** Directly pull product data from APIs like Shopify or WooCommerce.  
- **Support for Additional Modalities:** Extend the system to include videos and audio for richer feature extraction.  

--- 