export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br />
            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description">
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:
                - Your full name and section
                - Links to each of the lab assignments
                - Link to the Kanbas application
                - Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea><br />
            <table>
                <tbody>
                <tr>
                    <td style={{ textAlign: 'right', verticalAlign: 'top', paddingRight: '10px' }}>
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'right', verticalAlign: 'top', paddingRight: '10px' }}>
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="assignments">Assignments</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'right', verticalAlign: 'top', paddingRight: '10px' }}>
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td style={{ textAlign: 'right', verticalAlign: 'top', paddingRight: '10px' }}>
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="online">Online</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <label htmlFor="wd-online-entry-options">Online Entry Options</label><br />
                        <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
                        <input type="checkbox" id="wd-website-url" /> Website URL<br />
                        <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
                        <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
                        <input type="checkbox" id="wd-file-upload" /> File Upload
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <label htmlFor="wd-assign-to">Assign to</label>
                        <input id="wd-assign-to" value="Everyone" /><br />
                        <label htmlFor="wd-due-date">Due</label>
                        <input type="date" id="wd-due-date" defaultValue="2024-05-13" /><br />
                        <label htmlFor="wd-available-from">Available from</label>
                        <input type="date" id="wd-available-from" defaultValue="2024-05-06" /><br />
                        <label htmlFor="wd-available-until">Until</label>
                        <input type="date" id="wd-available-until" defaultValue="2024-05-20" /><br />
                    </td>
                </tr>
                </tbody>
            </table>
            <button>Cancel</button>
            <button>Save</button>
        </div>
    );
}
